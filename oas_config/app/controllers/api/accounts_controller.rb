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

      render json: @result.to_json
    end

    def update
      super
      if params[:account][:assets]
        @account.asset_ids = params[:account][:assets]
      end

      @account.save
    end

    def account_params
      params.require(:account).permit(:org_code, :google_analytics_key, :google_search_key, :dfp_path_prefix, :ooyala_ad_set_codes, :ooyala_video_player_id, :ooyala_audio_player_id, :platform_name, :copyright, :publication_name, :amp_config_id)
    end
  end
end
