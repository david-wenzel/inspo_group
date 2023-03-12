class BoardsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        boards = Board.all.order("title")
        render json: boards, include: :reviews, status: :ok
    end

    def create
        @current_user
        board = Board.create!(board_params)
        render json: board, status: :created
    end

    def destroy
        board = Board.find(params[:id])
        board.destroy
        head :no_content
    end

    private

    def board_params
        params.permit(:title)
    end

    def render_not_found_response
        return render json: { error: "Board not found"}, status: :not_found
    end
end
