# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Project.count == 0
  
  Project.create(logo: "cuisinian_logo.svg", title: "cuisinian", description: "This project is an iOS mobile app menu that help users to reserve at Cuisinian - a luxurious restaurant.", showcase_img: "cuisinian_showcase.png")
  
  Project.create(logo: "copporn_logo.svg", title: "copporn", description: "This project is an iOS mobile app that allows users to search for movie information.\nThe idea is packing multiple info in one screen, using swipe gesture.", showcase_img: "copporn_showcase.png")
  
  Project.create(logo: "dep_logo.svg", title: "dep", description: "This project is a clone version of the famous app Yelp. Dep allows users to search, sort and filter restaurants. <br>The idea here is to use quick tag for easier sort and filter, instead of dropdown menu.", showcase_img: "dep_showcase.png")
  
  Project.create(logo: "others_logo.svg", title: "others", description: "A collection of different drafted and incomplete projects, created during my coding courses.<br>These include logos, banners, web, etc.", showcase_img: "others_showcase.png")
  
end