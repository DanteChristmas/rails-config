class AddTypeToAssets < ActiveRecord::Migration
  def change
    add_column :assets, :type, :string
    add_column :asset_lists, :type, :string
  end
end
