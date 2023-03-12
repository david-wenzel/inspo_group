class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :post_body
  belongs_to :user
  belongs_to :board
end