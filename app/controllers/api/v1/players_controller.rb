class Api::V1::PlayersController < ApplicationController

  def all_elections
    elections = Election.all
    render json: elections
  end

  def all_players
    selected_election = Election.find_by_name(params[:election])
    all_players = selected_election.players
    response = {election: selected_election, players: all_players}
    render json: response
  end
end
