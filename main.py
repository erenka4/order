import requests

# iKas API URL'si ve yetkilendirme bilgileri
url = 'https://api.ikas.dev/orders'  # Örnek bir URL, gerçek URL'yi dokümantasyondan almalısınız
api_key = 'YOUR_API_KEY'  # API anahtarınız buraya gelecek

# Headers'a yetkilendirme bilgilerini eklemek
headers = {
    'Authorization': f'Bearer {api_key}',  # Örnek bir yetkilendirme şekli, dokümantasyona göre değişebilir
    'Content-Type': 'application/json'  # İstek içeriğinin JSON olduğunu belirtmek
}

# API'den veri çekme
response = requests.get(url, headers=headers)

# API'den dönen veriyi kontrol etme
if response.status_code == 200:
    # Veri başarılı şekilde alındı
    data = response.json()
    # Verilerle çalışmaya başlama
    print(data)
else:
    # Veri alınamadı, hata kontrolü
    print("Bir hata oluştu:", response.status_code)
