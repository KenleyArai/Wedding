Rails.application.routes.draw do
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'guests#create'
  get 'search_for_guest', to: 'guests#get_guest'
  get 'group/:gid', to: 'guests#get_group' 
  put 'attending/:id', to: 'guests#set_attending'
  put 'wants_for_dinner/:id', to: 'guests#set_entree'
  put 'wants_cake/:id', to: 'guests#set_cake'
  put 'has_allergy/:id', to: 'guests#set_allergy'
  put 'wants_to_hear/:id', to: 'guests#set_song'
  put 'is_kid/:id', to: 'guests#set_kid'
  put 'set_gid/:id', to: 'guests#set_group'
end

