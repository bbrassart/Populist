# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Election.destroy_all
Player.destroy_all
puts "DB destroyed"

numbers = [*1..100]

Election.create(name: "Régionales")
Election.create(name: "Cantonales")
Election.create(name: "Présidentielles")

10.times do
  Election.first.players.create(name: Faker::Name.name, votes: numbers.sample, birth_date: Faker::Date.between(100.years.ago, 21.years.ago))
end

8.times do
  Election.second.players.create(name: Faker::Name.name, votes: numbers.sample, birth_date: Faker::Date.between(100.years.ago, 21.years.ago))
end

2.times do
  Election.last.players.create(name: Faker::Name.name, votes: numbers.sample, birth_date: Faker::Date.between(100.years.ago, 21.years.ago))
end

puts "DB filled"
