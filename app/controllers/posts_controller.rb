class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    # def create
    #     if params[:board_id]
    #         board = Board.find(params[:board_id])
    #         post = @current_user.posts.create!(post_params)
    #         render json: post, include: :user, status: :created

    #     else
    #         posts = Post.all
    #         render json: posts, status: :created
    #     end
        
    # end

    def create
        @current_user
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = @current_user.posts.find(params[:id])
        post.update(post_params)
        render json: post
    end

    def destroy
        post = @current_user.posts.find(params[:id])
        post.destroy
        head :no_content
    end

    private
    
    def post_params
    params.permit(:img_url, :post_body, :board_id, :user_id)
    end

    
end
