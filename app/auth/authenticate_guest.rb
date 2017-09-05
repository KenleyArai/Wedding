class AuthenticateGuest
    def initialize(name, password)
      @name = name
      @password = password
    end
  
    # Service entry point
    def call
      JsonWebToken.encode(guest_id: guest.id) if guest
    end
  
    private
  
    attr_reader :name, :password
  
    # verify guest credentials
    def guest
      guest = Guest.find_by(name: @name)
      return guest if guest && guest.authenticate(password)
      # raise Authentication error if credentials are invalid
      raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
    end
  end