class AddApiPropsToAccount < ActiveRecord::Migration
  def change
    change_table :accounts do |t|
      t.string :api_key
      t.string :google_analytics_key
      t.string :google_search_key
      t.string :dfp_path_prefix
      t.string :ooyala_video_player_id
      t.string :ooyala_audio_player_id
      t.string :ooyala_ad_set_codes
      t.string :platform_name
      t.string :copyright
      t.string :publication_name
      t.string :amp_endpoint_url
    end
  end
end
