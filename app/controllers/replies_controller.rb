class RepliesController < ApplicationController
	def create
	  @post = Post.find(params[:post_id])
	  @reply = @post.replies.create(reply_params)
	end
 
  private
    def reply_params
      params.require(:reply).permit(:userID, :text)
    end
end
