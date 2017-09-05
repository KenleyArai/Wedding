# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  # called before every action on controllers
  before_action :authorize_request
  attr_reader :current_guest

  private

  # Check for valid request token and return user
  def authorize_request
    @current_guest = (AuthorizeApiRequest.new(request.headers).call)[:guest]
  end
end