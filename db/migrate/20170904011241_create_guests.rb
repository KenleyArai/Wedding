class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :allergy
      t.string :attending
      t.string :is_kid
      t.string :entree
      t.string :dessert
      t.string :song_request
      t.string :password_digest

      t.timestamps
    end
  end
end
