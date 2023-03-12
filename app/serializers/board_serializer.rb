class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :users
  has_many :reviews
end
