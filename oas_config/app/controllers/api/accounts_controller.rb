module Api
  class AccountsController < Api::BaseApiController
    def account_params
      params.require(:account).permit(:org_code, :api_key, :google_analytics_key, :google_search_key, :dfp_path_prefix, :ooyala_ad_set_codes, :ooyala_video_player_id, :ooyala_audio_player_id, :platform_name, :copyright, :publication_name, :amp_endpoint_url)
    end
  end
end
