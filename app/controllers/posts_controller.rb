class PostsController < ApplicationController
    def create
        if params[:board_id]
            game = Board.find(params[:board_id])
            review = @current_user.reviews.create!(review_params)
            render json: review, include: :user, status: :created

        else
            posts = Post.all
            render json: posts, status: :created
        end
        
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
end
