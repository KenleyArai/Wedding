FactoryGirl.define do
    factory :guest do
        name { Faker::Name.first_name }
        password 'foobar'
    end
end