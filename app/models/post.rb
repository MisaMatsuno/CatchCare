class Post < ApplicationRecord
	has_many :replies
	validates :title, :presence=>true
end
