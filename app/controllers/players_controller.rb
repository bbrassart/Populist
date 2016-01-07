class PlayersController < ApplicationController
  
  def index
    players = Player.all
    respond_to do |format|
      format.html
      format.json { render json: players }
    end
  end
end
