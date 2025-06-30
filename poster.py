import json
import time
import re
import requests
from bs4 import BeautifulSoup
from pathlib import Path

INPUT_FILE = "data/movies.json"
OUTPUT_FILE = "data/moviesP.json"
HEADERS = { "User-Agent": "Mozilla/5.0" }

def extract_imdb_id(entry):
    match = re.search(r"(tt\d{7,})", entry)
    return match.group(1) if match else None

def get_poster_url(imdb_id):
    url = f"https://www.imdb.com/title/{imdb_id}/"
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code != 200:
            print(f"[!] Failed to fetch {imdb_id} (status {response.status_code})")
            return None

        soup = BeautifulSoup(response.text, "html.parser")
        poster_div = soup.find("div", {"data-testid": "hero-media__poster"})
        if poster_div:
            img_tag = poster_div.find("img")
            if img_tag and img_tag.get("src"):
                return img_tag["src"]
    except Exception as e:
        print(f"[!] Error scraping {imdb_id}: {e}")
    return None

def scrape_and_append_posters():
    input_path = Path(INPUT_FILE)
    output_path = Path(OUTPUT_FILE)

    if not input_path.exists():
        print(f"[!] Input file not found: {INPUT_FILE}")
        return

    with open(input_path, "r") as f:
        new_data = json.load(f)

    # Load existing data if present
    if output_path.exists():
        with open(output_path, "r") as f:
            existing_data = json.load(f)
    else:
        existing_data = {}

    for year, entries in new_data.items():
        print(f"\n📆 Year {year}")
        if year not in existing_data:
            existing_data[year] = []

        # Collect existing IMDb IDs for deduplication
        existing_ids = {movie["id"] for movie in existing_data[year] if "id" in movie}

        for entry in entries:
            imdb_id = extract_imdb_id(entry)
            if not imdb_id:
                print(f"❌ Invalid entry: {entry}")
                continue
            if imdb_id in existing_ids:
                print(f"⏩ Skipping {imdb_id} (already exists)")
                continue

            print(f"🔍 Fetching {imdb_id}...", end=" ")
            poster_url = get_poster_url(imdb_id)
            if poster_url:
                print("✅")
                existing_data[year].append({ "id": imdb_id, "poster": poster_url })
            else:
                print("❌")
                existing_data[year].append({ "id": imdb_id, "poster": None })

            existing_ids.add(imdb_id)
            time.sleep(1)

    with open(output_path, "w") as f:
        json.dump(existing_data, f, indent=2)

    print(f"\n✅ Done. Output appended to {OUTPUT_FILE}")

if __name__ == "__main__":
    scrape_and_append_posters()
