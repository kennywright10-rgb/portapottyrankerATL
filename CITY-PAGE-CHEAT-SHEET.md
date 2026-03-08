# City Page Creation Cheat Sheet

## 🎯 Create a New City Page in 10 Minutes

### Step 1: Copy Template
Copy `atlanta.html` → rename to `[city-name].html`

### Step 2: Find/Replace These Exact Strings

| Find This | Replace With |
|-----------|--------------|
| `Atlanta` | `[Your City Name]` |
| `atlanta` | `[your-city-slug]` |
| `10 Verified Companies` | `[X] Verified Companies` |
| `10 Serving Atlanta` | `[X] Serving [City]` |
| `33.7490` | `[City Latitude]` |
| `-84.3880` | `[City Longitude]` |
| `https://www.wikidata.org/wiki/Q23556` | `[City Wikidata ID]` |

### Step 3: Update These Sections

**Company Count** (Line ~30-40):
```html
<div class="stat-number">10</div>
<div class="stat-label">Serving Atlanta</div>
```
→ Change to correct number for your city

**Top 3 Companies** (Line ~250-400):
Replace with top 3 companies serving that city from your data

**Pricing** (Leave same across all cities):
Keep Atlanta pricing - it applies to all Metro Atlanta

**Neighborhoods Section** (Line ~800):
Update with actual neighborhoods for that city

**Related Cities** (Bottom of page):
Update to show other nearby cities (not the current one)

### Step 4: Test & Deploy

1. Validate HTML: https://validator.w3.org
2. Test Schema: https://search.google.com/test/rich-results
3. Check mobile: https://search.google.com/test/mobile-friendly
4. Deploy to Vercel

---

## 📍 City Coordinates & Info

### Alpharetta
- Lat/Long: `34.0754, -84.2941`
- Wikidata: `https://www.wikidata.org/wiki/Q350780`
- Companies: 10
- Top 3: Patriot Portables, Alpharetta Porta Potty Rental, Georgia Porta Potty Rentals Pros

### Marietta
- Lat/Long: `33.9526, -84.5499`
- Wikidata: `https://www.wikidata.org/wiki/Q501999`
- Companies: 11
- Top 3: Patriot Portables, Porta Potty Pro, Marietta Porta Potty Rentals

### Roswell
- Lat/Long: `34.0232, -84.3616`
- Wikidata: `https://www.wikidata.org/wiki/Q203001`
- Companies: 11
- Top 3: Patriot Portables, Porta Potty Pro, Porta Potty Dogs

### Sandy Springs
- Lat/Long: `33.9304, -84.3733`
- Wikidata: `https://www.wikidata.org/wiki/Q956226`
- Companies: 9
- Top 3: Patriot Portables, Elite Portable Restroom, Quick Relief Solutions

### Johns Creek
- Lat/Long: `34.0289, -84.1986`
- Wikidata: `https://www.wikidata.org/wiki/Q498412`
- Companies: 2
- Top 2: Patriot Portables, Quick Relief Solutions

### Duluth
- Lat/Long: `33.9768, -84.1446`
- Wikidata: `https://www.wikidata.org/wiki/Q1030808`
- Companies: 2
- Top 2: Patriot Portables, Quick Relief Solutions

### Lawrenceville
- Lat/Long: `33.9562, -83.9880`
- Wikidata: `https://www.wikidata.org/wiki/Q719268`
- Companies: 2
- Top 2: Patriot Portables, Quick Relief Solutions

---

## 🔍 Neighborhood Examples by City

### Alpharetta Neighborhoods:
- Downtown Alpharetta
- Windward
- Crabapple
- Milton (border)
- Big Creek

### Marietta Neighborhoods:
- Marietta Square
- East Cobb
- West Cobb
- Fair Oaks
- Kennesaw (border)

### Roswell Neighborhoods:
- Historic Roswell
- East Roswell
- Riverside
- Mountain Park
- Holcomb Bridge

### Sandy Springs Neighborhoods:
- Dunwoody (border)
- Perimeter Center
- North Springs
- Riverside
- Hammond Park

### Johns Creek Neighborhoods:
- Technology Park
- Country Club of the South
- Newtown
- Ocee
- State Bridge

### Duluth Neighborhoods:
- Downtown Duluth
- Parsons
- Peachtree Corners (border)
- Berkeley Lake (adjacent)

### Lawrenceville Neighborhoods:
- Downtown Lawrenceville
- Sugarloaf
- Dacula (border)
- Grayson (adjacent)

---

## ✅ Quality Checklist

Before deploying each city page, verify:

- [ ] City name correct in title tag
- [ ] City name correct in H1
- [ ] Company count accurate
- [ ] Top 3 companies listed correctly
- [ ] Phone numbers correct
- [ ] Coordinates updated
- [ ] Wikidata ID updated
- [ ] Neighborhoods section customized
- [ ] Related cities list doesn't include current city
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] Meta description includes city name
- [ ] Canonical URL correct
- [ ] Internal links work
- [ ] Last updated date is current month

---

## 🚀 Batch Creation Strategy

**Day 1:** Create Alpharetta + Marietta
**Day 2:** Create Roswell + Sandy Springs
**Day 3:** Create Johns Creek + Duluth + Lawrenceville
**Day 4:** Test all pages, fix any issues
**Day 5:** Deploy all, submit to Google

Total time: ~5 hours for all 7 pages

---

## 💡 Pro Tips

1. **Keep pricing consistent** across all city pages (it's all Metro Atlanta)

2. **Customize company order** - put highest-rated for that city first

3. **Update "Related Cities"** - show closest neighboring cities

4. **Add local landmarks** in content (e.g., "near Avalon" for Alpharetta)

5. **Use city-specific examples** when possible

6. **Test on mobile** - most searches are mobile

7. **Validate schema** - this is critical for AI citations

---

## 📱 Quick Command Line Tips

If you're tech-savvy:

**Create city from template:**
```bash
cp atlanta.html alpharetta.html
sed -i 's/Atlanta/Alpharetta/g' alpharetta.html
sed -i 's/atlanta/alpharetta/g' alpharetta.html
# Then manually update coordinates, company count, top companies
```

**Batch validate HTML:**
```bash
for file in *.html; do
  echo "Validating $file"
  # Upload to validator.w3.org
done
```

---

That's it! You now have everything you need to create all 7 remaining city pages.

Each page = 10 minutes of work = massive SEO boost! 🚀
