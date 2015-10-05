class CorrectAssetTypeProperty < ActiveRecord::Migration
  def change
    change_table :assets do |t|
      t.remove :type
      t.string :asset_type
    end
  end
end
