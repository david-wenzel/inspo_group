class Post < ApplicationRecord
  belongs_to :user
  belongs_to :board

  # validates :img_url, :post_body, presence: true
end
