class Guest < ApplicationRecord
    has_secure_password

    validates_presence_of :name, :password_digest
end
