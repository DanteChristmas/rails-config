class AddComponenetNameToAsset < ActiveRecord::Migration
  def change
    add_column :assets, :component_name, :string
  end
end
