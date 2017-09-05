class AddGroupIdToGuests < ActiveRecord::Migration[5.1]
  def change
    add_column :guests, :gid, :string
  end
end
