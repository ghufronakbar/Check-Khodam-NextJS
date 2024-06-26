const listKhodam = () => {

  const khodamArray = [
    {
      "khodam": "Skibidi Toilet",
      "gambar": "https://i.guim.co.uk/img/media/9f27b0ee9699d24b9af43cb2b806e34360b4871a/235_161_2056_1235/master/2056.jpg?width=1200&quality=85&auto=format&fit=max&s=d7e97e2ee56db82cde1d2369f49c685f"
    },
    {
      "khodam": "Sate Suzanna",
      "gambar": "https://cdn1-production-images-kly.akamaized.net/tnuPyR-DmbCWJlGD4bprJgmDna8=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2369468/original/004595100_1538105772-cats.jpg"
    },
    {
      "khodam": "Alucard Ijo",
      "gambar": "https://3.bp.blogspot.com/-nLL2iCGZt-g/XSeolXcOcVI/AAAAAAAAA0E/Y1xb3opLY7Udy1ODc0fVgp-Q6OYZUs1yQCKgBGAs/w0/alucard-lone-hero-skin-mobile-legends-uhdpaper.com-4K-173.jpg"
    },
    {
      "khodam": "Tehyung Jimin",
      "gambar": "https://media.tenor.com/0BnPNmhZB9kAAAAe/tehyung-jimin-meme.png"
    },
    {
      "khodam": "Waduh",
      "gambar": "https://assets.kompasiana.com/items/album/2023/05/15/9a24d48eafa6ba090c13cb91bcda5323-6462152e08a8b53812152342.jpg?t=o&v=300"
    },
    {
      "khodam": "Brokoli Santai",
      "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqQZxoPAYZyvLYmMHUpJaX52E77kdEij8WA&s"
    },
    {
      "khodam": "Baju Macan Tutul",
      "gambar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.idntimes.com%2Fhype%2Fhumor%2Ffikri-xii-dpib-1%2Ffoto-lucu-patung-harimau-c1c2&psig=AOvVaw0PPY-VbQugWyX4HLwNT6Ks&ust=1719480726303000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJji8v_6-IYDFQAAAAAdAAAAABAK"
    },
    {
      "khodam": "Singa Pemberani",
      "gambar": "https://images.tokopedia.net/img/cache/500-square/product-1/2019/6/10/2797207/2797207_1c437bbe-beeb-48fd-81d2-2535a4c16a75_720_720.jpg"
    },
    {
      "khodam": "Susu Sapi",
      "gambar": "https://cdn.pixabay.com/photo/2018/06/05/12/25/milk-3455407_960_720.jpg"
    },
    {
      "khodam": "Daging Ayam",
      "gambar": "https://cdn.antaranews.com/cache/1200x800/2023/05/06/Daging_Ayam_Titipku.jpg"
    },
    {
      "khodam": "Ketoprak Custom",
      "gambar": "https://img-global.cpcdn.com/recipes/835a1524e8167639/680x482cq70/ketoprak-foto-resep-utama.jpg"
    },
    {
      "khodam": "Kakek Sugiono",
      "gambar": "https://awsimages.detik.net.id/visual/2021/01/28/foto-shigeo-tokuda-south-china-morning-post-handout_169.jpeg?w=400&q=90"
    },
    {
      "khodam": "Jordi El Nino",
      "gambar": "https://i.pinimg.com/222x/13/8a/a5/138aa5ad930e5e5a333944ef1654d794.jpg"
    },
    {
      "khodam": "Haya Oren",
      "gambar": "https://dailyspin.id/wp-content/uploads/2020/08/Fragment-Shop-Agustus-2020.jpg"
    },
    {
      "khodam": "Truk Oleng",
      "gambar": "https://img.lazcdn.com/g/ff/kf/S47db9d107bc541ad8ad1e72c1602baa4X.jpg_720x720q80.jpg"
    },
    {
      "khodam": "M Ibnu",
      "gambar": "https://api.duniagames.co.id/api/content/upload/file/19109616921610363752.jpg"
    },
    {
      "khodam": "Risol Mayo",
      "gambar": "https://asset.kompas.com/crops/RwdMnMdAVlFdKOmMauQE9CJEpR4=/0x283:800x817/750x500/data/photo/2022/07/29/62e35a47c7535.jpg"
    },
    {
      "khodam": "Ayam Geprek",
      "gambar": "https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203-500x300.jpg"
    },
    {
      "khodam": "Alok",
      "gambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLgSkqql_KLH--1gjd_vZVpGiSOyesPIlHg&s"
    },
    {
      "khodam": "Bocah Babi",
      "gambar": "https://www.greenscene.co.id/wp-content/uploads/2021/03/Gabi.jpg"
    },
    {
      "khodam": "Alien Ijo",
      "gambar": "https://static.gatra.com/foldershared/images/2023/roh/03-Mar/Alien6.jpg"
    },
    {
      "khodam": "Capybara",
      "gambar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/1200px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg"
    },
    {
      "khodam": "Dugong Liar",
      "gambar": "https://awsimages.detik.net.id/community/media/visual/2022/08/25/dugong.jpeg?w=800"
    },
    {
      "khodam": "Pisang",
      "gambar": "https://pertanian.jogjakota.go.id/assets/instansi/pertanian/article/20201019165144.jpeg"
    },
    {
      "khodam": "Monyet Putih",
      "gambar": "https://awsimages.detik.net.id/community/media/visual/2017/12/06/6414c1ae-fcd1-49a6-8316-4a71c29f93ff_43.jpg?w=600&q=90"
    },
    {
      "khodam": "Voldemort",
      "gambar": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/voldemort.jpg"
    },
    {
      "khodam": "Mail Playboy",
      "gambar": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/22/fa9d4428-c9b9-4dc4-8c11-19ba6b9869f9.jpg"
    },
    {
      "khodam": "Momo",
      "gambar": "https://awsimages.detik.net.id/community/media/visual/2018/08/05/9aec7c46-02f0-4ae5-9b29-1c9a19e9b3d6.jpeg?w=600&q=90"
    },
    {
      "khodam": "Wibu Bau Bawang",
      "gambar": "https://api.duniagames.co.id/api/content/upload/file/3009540571568623587.PNG"
    },
  ];
  return khodamArray
}
export default listKhodam