class PostsController < ApplicationController
	def index
		@posts = Post.all
		render json: @posts
	end

	def new
	end

	def show
	end

	def create
		@post = Post.new(post_params)
	
		if @post.save
			render json: {state: "OK", message: "Successfully posted!"}
		else
			render json: @post.errors, status: :unprocessable_entity
		end

	end

	private
		def post_params
			params.require(:post).permit(:category, :title, :userID, :text, :replyCount)
		end
end
