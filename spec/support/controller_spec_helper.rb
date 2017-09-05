# spec/support/controller_spec_helper.rb
module ControllerSpecHelper
    # generate tokens from guest id
    def token_generator(guest_id)
      JsonWebToken.encode(guest_id: guest_id)
    end
  
    # generate expired tokens from guest id
    def expired_token_generator(guest_id)
      JsonWebToken.encode({ guest_id: guest_id }, (Time.now.to_i - 10))
    end
  
    # return valid headers
    def valid_headers
      {
        "Authorization" => token_generator(guest.id),
        "Content-Type" => "application/json"
      }
    end
  
    # return invalid headers
    def invalid_headers
      {
        "Authorization" => nil,
        "Content-Type" => "application/json"
      }
    end
  end