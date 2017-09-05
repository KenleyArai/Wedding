# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'guests.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

csv.each do |row|

    name = row['Firstname'].capitalize

    if row['Lastname']
        name += ' ' + row['Lastname'].capitalize
    end

    guest = Guest.new(
        :name                   => name,
        :password               => row['password'],
        :password_confirmation  => row['password_confirmation'],
        :gid                    => row['Group'],
        :is_kid                 => row['Is_kid'],
        :attending              => 'unknown'
    )
    guest.save!
end