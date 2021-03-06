# app/controllers/authentication_controller.rb
class AuthenticationController < ApplicationController
    skip_before_action :authorize_request, only: :authenticate
    # return auth token once guest is authenticated
    def authenticate
      auth_token =
        AuthenticateGuest.new(auth_params[:name], auth_params[:password]).call
      json_response(auth_token: auth_token)
    end
  
    private
  
    def auth_params
      params.permit(:name, :password, :authentication)
    end
  end