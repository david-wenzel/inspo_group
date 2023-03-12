class Post < ApplicationRecord
  belongs_to :user
  belongs_to :board

  validates :img_url, :body, presence: true
end
