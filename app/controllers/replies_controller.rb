class RepliesController < ApplicationController
  def index
  end

	def create
	  #@post = Post.find(params[:post_id])
    #@reply = @post.replies.create(reply_params)
    @replies = Reply.where("post_id=?", params[:post_id])
		render json: @replies
  end
  
  def new
  end

  def show
  end
end
