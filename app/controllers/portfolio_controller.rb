class PortfolioController < ApplicationController
  def show
    @current_project = Project.find(params[:id])
  end
end
