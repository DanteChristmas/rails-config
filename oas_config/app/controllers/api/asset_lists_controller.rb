module Api
  class AssetListsController < Api::BaseApiController

    def update
      super
      if params[:asset_list][:assets]
        @asset_list[:asset_list].asset_ids = params[:asset_list][:assets]
        @asset_list[:asset_list].save
      end
    end

    def asset_list_params
      params.require(:asset_list).permit(:version, :url, :asset_type, :script_created, :script_last_modified, :assets)
    end
  end
end
