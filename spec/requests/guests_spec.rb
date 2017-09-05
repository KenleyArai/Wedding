# spec/requests/guests_spec.rb
require 'rails_helper'

RSpec.describe 'Guests API', type: :request do
  let(:guest) { build(:guest) }
  let(:headers) { valid_headers.except('Authorization') }
  let(:valid_attributes) do
    attributes_for(:guest, password_confirmation: guest.password)
  end
  let(:headers) { valid_headers }

  # Guest attending test suite
  describe 'PUT /attending/:id' do
    context 'when the record exists' do
      before { put "/attending/#{guest.id}?attending=yes", headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Guest signup test suite
  describe 'POST /signup' do
    context 'when valid request' do
      before { post '/signup', params: valid_attributes.to_json, headers: headers }

      it 'creates a new guest' do
        expect(response).to have_http_status(201)
      end

      it 'returns success message' do
        expect(json['message']).to match(/Account created successfully/)
      end

      it 'returns an authentication token' do
        expect(json['auth_token']).not_to be_nil
      end
    end

    context 'when invalid request' do
      before { post '/signup', params: {}, headers: headers }

      it 'does not create a new guest' do
        expect(response).to have_http_status(422)
      end

      it 'returns failure message' do
        expect(json['message'])
          .to match(/Password can't be blank, Name can't be blank, Password digest can't be blank/)
      end
    end
  end
end