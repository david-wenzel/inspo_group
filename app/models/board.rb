class Board < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
    scope :by_title, -> {order(title: :asc)}

    validates :title, presence: true, uniqueness: true
end
