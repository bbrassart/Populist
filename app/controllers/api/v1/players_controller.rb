class Api::V1::PlayersController < ApplicationController

  def all_elections
    elections = Election.all
    render json: elections
  end

  def all_players
    selected_election = Election.find(params[:id])
    all_players = selected_election.players
    response = {election: selected_election, players: all_players}
    render json: response
  end

  def upvote
    selected_player = Player.find(params[:id])
    selected_player.votes += 1
    selected_player.save
    render nothing: true
  end

  def add_election
    election = Election.create(name: params[:name])
    election.save
    render nothing: true
  end

  def delete_election
    election = Election.find(params[:id])
    election.destroy
    render nothing: true
  end

  def delete_player
    player = Player.find(params[:id])
    player.destroy
    render nothing: true
  end

  def add_player
    current_election = Election.find(params[:id])
    current_election.players.create(name: params[:player][:name],
    age: params[:player][:age],
    votes: 0)
    current_election.save
    render nothing: true
  end
end
