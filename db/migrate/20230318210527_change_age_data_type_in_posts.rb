class ChangeAgeDataTypeInPosts < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :user_id, :integer  
    change_column :posts, :board_id, :integer  
  end
end
