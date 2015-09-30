class UpdateAssetProps1 < ActiveRecord::Migration
  def change
    remove_column :asset_items, :integer, :string
  end
end
