module Api
  class AccountsController < Api::BaseApiController

    def show
      if params[:search_by_org_code]
        @account = Account.find_by_org_code params[:id]
      else
        @account = Account.find params[:id]
      end

      @result = {
        account: @account
      }
      @result[:assets] = @account.assets if params[:include_assets]
      @result[:ampConfig] = @account.amp_config if params[:include_amp_config]
      if params[:include_feature_toggles]
        @result[:featureToggles] = @account.feature_toggle
        @result[:featureToggles] = @account.create_feature_toggle if !@result[:featureToggles].present?
      end

      render json: @result.to_json
    end

    def create
      super
      if @account.id.present?
        @account.create_feature_toggle
      end
    end

    def update
      super
      if params[:account][:assets]
        @account.asset_ids = params[:account][:assets]
      end

      @account.save
      @account.touch
    end

    def account_params
      params.require(:account).permit(:org_code, :google_analytics_key, :google_search_key, :dfp_path_prefix, :ooyala_ad_set_codes, :ooyala_video_player_id, :ooyala_audio_player_id, :platform_name, :copyright, :publication_name, :amp_config_id, :facebook_app_id, :institution_twitter_handle, :institution_twitter_string, :default_tickets_link, :media_byline, :facebook_url, :twitter_url, :instagram_url, :youtube_url, :pinterest_url)
    end
  end
end
