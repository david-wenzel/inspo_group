class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :boards
  has_many :posts
  has_many :boards, through: :posts
end
