package com.banana.core.models;


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.banana.core.entity.BananaCard;
import com.banana.core.models.adapters.BananaCardListModel;
import com.google.gson.Gson;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Model(adaptables = SlingHttpServletRequest.class,adapters = {BananaCardListModel.class, ComponentExporter.class},resourceType = "bananaReact/components/bananaCardList",defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name= ExporterConstants.SLING_MODEL_EXPORTER_NAME,extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BananaCardListModelImpl implements BananaCardListModel {

    private static Logger logger = LoggerFactory.getLogger(BananaCardListModelImpl.class);


    @ChildResource
    private List<Node> bananaListCards;

    private List<BananaCard> getCardList() {
        List<BananaCard> bananaCardList = new ArrayList<>();
        for (Node node : bananaListCards) {
            try {
                bananaCardList.add(new BananaCard(node.getProperty("cardHeader").getString(), node.getProperty("cardDescription").getString()));
            } catch (RepositoryException e) {
                logger.info("The error here is {} ", e);
            }
        }
        return bananaCardList;
    }


    @Override
    public List<BananaCard> getBananaCardList() {
        ArrayList<BananaCard> staticBan = new ArrayList<>();
        return  bananaListCards==null ? staticBan : getCardList();
    }


    @Override
    public String getExportedType() {
        return "bananaReact/components/bananaCardList";
    }
}


