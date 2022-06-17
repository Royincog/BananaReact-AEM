package com.banana.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.banana.core.models.adapters.BananaTestModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


@Model(adaptables = SlingHttpServletRequest.class,adapters = {BananaTestModel.class, ComponentExporter.class},resourceType = "bananaReact/components/bananaTestComp",defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BananaTestModelImpl implements BananaTestModel {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @ChildResource
    private List<Node> textList;



    @Override
    public List<String> getTextList() {
        return getTextListFromNodes(textList);
    }

    private List<String> getTextListFromNodes(List<Node> nodeList) {

        List<String> strings = new ArrayList<>();
        for(Node node : nodeList){
            try {
                strings.add(node.getProperty("text").getString());
            } catch (RepositoryException e) {
                throw new RuntimeException(e);
            }
        }

        return strings;
    }

    @Override
    public String getExportedType() {
        return "bananaReact/components/bananaTestComp";
    }
    @PostConstruct
    private void init(){
        logger.info("In the post construct of test Model impl");
     textList.forEach(item -> {
         try {
             logger.info("Each node name for textnodes " + item.getProperty("").getString());
         } catch (RepositoryException e) {
             logger.info("The exception for node : {} " , e);
         }
     });
    }
}
