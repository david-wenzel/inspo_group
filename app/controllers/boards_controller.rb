class BoardsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    
end
