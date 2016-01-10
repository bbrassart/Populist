Rails.application.routes.draw do
  devise_for :users
  get '/' => 'home#index'
  namespace :api do
    namespace :v1 do
      get '/all_elections' => 'players#all_elections'
      delete '/deleteElection/:id' => 'players#delete_election'
      delete '/deletePlayer/:id' => 'players#delete_player'
      get '/:id' => 'players#all_players'
      post '/upvote/:id' => 'players#upvote'
      post '/new_election' => 'players#add_election'
      post '/:id/addPlayer' => 'players#add_player'

    end
  end

end
