class Post < ApplicationRecord
	has_many :replies
	validates :title, presense: true
end
