class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :post_body, :user_id
  belongs_to :user
  belongs_to :board
end