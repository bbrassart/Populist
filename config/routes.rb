Rails.application.routes.draw do
  devise_for :users
  get '/' => 'home#index'
  namespace :api do
    namespace :v1 do
      get '/all_elections' => 'players#all_elections'
      get '/:election' => 'players#all_players'
      post '/upvote/:player' => 'players#upvote_player'
    end
  end

end
