# app/controllers/guests_controller.rb
class GuestsController < ApplicationController
    skip_before_action :authorize_request, only: :create
    before_action :authorize_request, only: [:get_guest, :set_attending, :set_entree, :set_song, :set_cake, :set_allergy, :get_group]
    before_action :set_guest, only: [:set_attending, :set_entree, :set_song, :set_cake, :set_allergy, :get_guest, :get_group]
    # POST /signup
    # return authenticated token upon signup
    def create
      guest = Guest.create!(guest_params)
      auth_token = AuthenticateGuest.new(guest.name, guest.password).call
      response = { message: Message.account_created, auth_token: auth_token }
      json_response(response, :created)
    end

    def get_group
      guests = Guest.where(gid: params[:gid]).order(:name)
      if @current_guest.gid == guests.first.gid
        json_response(guests.to_json)
      end
    end

    def set_group
      @guest = Guest.find(params[:id])
      if params[:gid]
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def set_attending
      @guest = Guest.find(params[:id])
      if params[:attending] == 'yes' or params[:attending] == 'no' and @current_guest.gid == @guest.gid
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def set_entree
      @guest = Guest.find(params[:id])
      if params[:entree] == 'steak' or params[:entree] == 'salmon' and @current_guest.gid == @guest.gid
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end
    
    def set_song
      @guest = Guest.find(params[:id])
      if params[:song_request] and @current_guest.gid == @guest.gid
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def set_cake
      @guest = Guest.find(params[:id])
      if (params[:dessert] == 'carrot' or params[:dessert] == 'chocolate' or params[:dessert] == 'lemon-lime' or params[:dessert] == '7-layer') and @current_guest.gid == @guest.gid
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def set_allergy
      @guest = Guest.find(params[:id])
      if params[:allergy] and @current_guest.gid == @guest.gid
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def set_kid
      @guest = Guest.find(params[:id])
      if params[:is_kid] == 'yes' or params[:is_kid] == 'no'
        @guest.update_attributes(guest_params)
        @guest.save!
      end
      json_response(@guest.to_json)
    end

    def get_guest
      json_response(@guest.to_json)
    end


    private
    
    def guest_params
      params.permit(
        :name,
        :password,
        :password_confirmation,
        :attending,
        :entree,
        :dessert,
        :allergy,
        :is_kid,
        :gid,
        :song_request
      )
    end

    def set_guest
      if params[:id] 
        @guest = Guest.find(params[:id])
      elsif params[:name]
        @guest = Guest.where(name: params[:name])
      end
    end

  end