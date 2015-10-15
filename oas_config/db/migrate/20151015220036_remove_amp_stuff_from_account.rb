class RemoveAmpStuffFromAccount < ActiveRecord::Migration
  def change
    change_table :accounts do |t|
      t.remove :api_key, :amp_endpoint_url
    end
  end
end
